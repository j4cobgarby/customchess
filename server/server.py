import logging
import random
from websocket_server import WebsocketServer

class GameInstance:
    def __init__():
        pass

# This should be subclassed
class GameVariant:
    board = []

    def __init__():
        pass
    
    def get_boardsize():
        return (8,8)

    def get_valid_moves(piece):
        # piece in format: (id, (row,column))

        if piece[0] == "p":
            return [(piece[1][0]+1,piece[1][1])]

        return []

    def get_num_players():
        return 2

def new_client(client, server):
    server.send_message_to_all("Hello")

def message_received(client, server, message):
    spl = message.split(':')
    if (spl[0] == 'uu'):
        print(client['address'], "changing username to", spl[1])

def makegamecode():
    return ''.join([random.choice(list('0123456789abcdefghijklmnopqrstuvwxyz')) for i in range(8)])

server = WebsocketServer(13254, host='127.0.0.1', loglevel=logging.INFO)
server.set_fn_new_client(new_client)
server.set_fn_message_received(message_received)
server.run_forever()
