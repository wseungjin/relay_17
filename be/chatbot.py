import hashlib
import hmac
import base64
import time
import requests
import json
import sys


class ChatbotMessageSender:

    # chatbot api gateway url
    ep_path = 'https://c52l36tlkr.apigw.ntruss.com/Chatbot/chatbot/'
    # chatbot custom secret key
    secret_key = 'Q2hlWE9Sa2NIRmJkUXNoVWlYQmlqeWxnT3RMcHVVSFI='

    def req_message_send(self, command):

        timestamp = self.get_timestamp()
        request_body = {
            'version': 'v2',
            'userId': 'U47b00b58c90f8e47428af8b7bddcda3d1111111',
            'timestamp': timestamp,
            'bubbles': [
                {
                    'type': 'text',
                    'data': {
                        'description': command
                    }
                }
            ],
            'event': 'send'
        }

        ## Request body
        encode_request_body = json.dumps(request_body).encode('UTF-8')

        ## make signature
        signature = self.make_signature(self.secret_key, encode_request_body)

        ## headers
        custom_headers = {
            'Content-Type': 'application/json;UTF-8',
            'X-NCP-CHATBOT_SIGNATURE': signature
        }

        # print("## Timestamp : ", timestamp)
        # print("## Signature : ", signature)
        # print("## headers ", custom_headers)
        # print("## Request Body : ", encode_request_body)

        ## POST Request
        response = requests.post(
            headers=custom_headers, url=self.ep_path, data=encode_request_body)

        # 여기서 바로 값을 얻고 싶을 때, ( ['부경대학교', '장학금'] )
        # answer = []
        # if(res.status_code == 200):
        #     data = json.loads(response.text)         # res값을 json형식으로 바꿈
        # if(data["scenario"]["intent"][0] == '장학금'):
        #     answer.insert(0, data["entities"][0]["word"])
        #     answer.insert(1, data["entities"][1]["word"])
        #     return answer
        # elif (data["scenario"]["intent"][0] == '동창찾기'):
        #     answer.insert(0, data["bubbles"][0]["data"]["description"])
        #     return answer

        # string 형식으로 답을 얻고 싶을 때, main에서 처리를 한번 더 해줘야함
        return response

    @staticmethod
    def get_timestamp():
        timestamp = int(time.time() * 1000)
        return timestamp

    @staticmethod
    def make_signature(secret_key, request_body):

        secret_key_bytes = bytes(secret_key, 'UTF-8')

        signing_key = base64.b64encode(
            hmac.new(secret_key_bytes, request_body, digestmod=hashlib.sha256).digest())

        return signing_key


if __name__ == '__main__':

    command = sys.argv[1]   # 질문
    res = ChatbotMessageSender().req_message_send(command)
    answer = []
    if(res.status_code == 200):
        data = json.loads(res.text)   
        # print(data)      # res값을 json형식으로 바꿈
        if(data["scenario"]["intent"][0] == '장학금'):
            answer.append(data["entities"][1]["word"])
            answer.append(data["entities"][0]["word"])
            print(answer[0])
            print(answer[1])
        elif (data["scenario"]["intent"][0] == '동창찾기'):
            answer.append(data["bubbles"][0]["data"]["description"])
            print(answer[0])
            try:
              answer.append(data["entities"][0]["word"])
              if(answer[1] != "장학금"):
                print(answer[1])
            except:
              pass
        elif (data["bubbles"][0]["data"]["description"] == '그래 안녕'):
            print("안녕")

