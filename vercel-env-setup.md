# Configuração das Variáveis de Ambiente no Vercel

## 1. Configurar Resend

1. Acesse [resend.com](https://resend.com)
2. Crie uma conta gratuita
3. Vá em "API Keys" e crie uma nova chave
4. Copie a chave (começa com `re_`)

## 2. Configurar no Vercel

### Opção A: Via Dashboard
1. Acesse [vercel.com](https://vercel.com)
2. Vá para seu projeto "hospedando"
3. Clique em "Settings" > "Environment Variables"
4. Adicione:
   - **Name**: `RESEND_API_KEY`
   - **Value**: `re_sua_chave_aqui`
   - **Environment**: Production, Preview, Development

### Opção B: Via CLI
```bash
# No terminal, na pasta do projeto
vercel env add RESEND_API_KEY
# Digite sua chave do Resend quando solicitado
```

## 3. Verificar Configuração

Após configurar, faça um novo deploy:
```bash
vercel --prod
```

## 4. Testar

1. Acesse seu site: https://hospedando-1src450hq-pedroresendes-projects.vercel.app
2. Vá para a seção de contato
3. Preencha o formulário e teste o envio

## 5. Verificar Logs

Se houver erro, verifique os logs:
1. No dashboard do Vercel
2. Vá em "Functions" > "api/send-email"
3. Clique em "View Function Logs"

## URLs Importantes

- **Site**: https://hospedando-1src450hq-pedroresendes-projects.vercel.app
- **API**: https://hospedando-1src450hq-pedroresendes-projects.vercel.app/api/send-email
- **Dashboard**: https://vercel.com/pedroresendes-projects/hospedando 