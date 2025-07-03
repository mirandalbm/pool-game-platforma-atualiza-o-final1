import json

# Caminho do arquivo JSON exportado do chat
CHAT_EXPORT_FILE = 'chat-export-1751210826238.json'

def main():
    # Lê o arquivo JSON
    with open(CHAT_EXPORT_FILE, 'r', encoding='utf-8') as f:
        data = json.load(f)

    # Exemplo de organização: imprimir mensagens do chat
    # Ajuste conforme a estrutura real do JSON
    if isinstance(data, list):
        for msg in data:
            user = msg.get('user', 'Desconhecido')
            text = msg.get('text', '')
            print(f"{user}: {text}")
    elif isinstance(data, dict):
        # Caso o JSON seja um dicionário
        for key, value in data.items():
            print(f"{key}: {value}")
    else:
        print("Formato de JSON não reconhecido.")

if __name__ == '__main__':
    main()
