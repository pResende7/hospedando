# Configuração da API de Email - Smile Chic Clinic

Este guia explica como configurar a API de email para enviar formulários de contato para o email `pedroresendec_@hotmail.com`.

## 🚀 Opções de Hospedagem

### Opção 1: Vercel (Recomendado)

#### 1. Configurar Resend
1. Acesse [resend.com](https://resend.com) e crie uma conta gratuita
2. Obtenha sua API Key
3. Configure um domínio de email (ex: `noreply@seudominio.com`)

#### 2. Deploy no Vercel
```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer login
vercel login

# Deploy
vercel

# Configurar variáveis de ambiente
vercel env add RESEND_API_KEY
```

#### 3. Configurar Variáveis de Ambiente
No dashboard do Vercel, adicione:
- `RESEND_API_KEY`: sua chave do Resend

### Opção 2: Netlify (Alternativa)

#### 1. Configurar Gmail
1. Ative a verificação em 2 etapas no Gmail
2. Gere uma "Senha de App" em Configurações > Segurança
3. Use essa senha como `EMAIL_PASS`

#### 2. Deploy no Netlify
1. Conecte seu repositório GitHub ao Netlify
2. Configure as variáveis de ambiente:
   - `EMAIL_USER`: seu email@gmail.com
   - `EMAIL_PASS`: sua senha de app do Gmail

## 📁 Estrutura dos Arquivos

```
smile-chic-clinic-main/
├── api/
│   └── send-email.js          # API Vercel
├── netlify/
│   └── functions/
│       └── send-email.js      # API Netlify
├── src/
│   ├── hooks/
│   │   └── use-email.ts       # Hook personalizado
│   └── components/
│       └── Contact.tsx        # Componente atualizado
├── vercel.json                # Configuração Vercel
├── netlify.toml              # Configuração Netlify
└── package.json              # Dependências atualizadas
```

## 🔧 Configuração Local

### 1. Instalar Dependências
```bash
npm install
```

### 2. Configurar Variáveis de Ambiente
Crie um arquivo `.env.local`:
```env
# Para Vercel
RESEND_API_KEY=sua_chave_do_resend

# Para Netlify
EMAIL_USER=seu_email@gmail.com
EMAIL_PASS=sua_senha_de_app
```

### 3. Testar Localmente
```bash
npm run dev
```

## 📧 Funcionalidades da API

### Campos do Formulário
- **Nome**: Nome completo do cliente
- **Email**: Email para contato
- **Telefone**: Telefone/WhatsApp
- **Mensagem**: Detalhes da consulta

### Email Recebido
O email terá:
- Assunto: "Nova consulta solicitada - [Nome]"
- Layout profissional com informações organizadas
- Data e hora do envio
- Design responsivo

## 🛠️ Personalização

### Alterar Email Destino
No arquivo `api/send-email.js` ou `netlify/functions/send-email.js`:
```javascript
to: ['pedroresendec_@hotmail.com'], // Altere aqui
```

### Personalizar Layout do Email
Edite o HTML no arquivo da API para alterar o design do email.

### Adicionar Campos
1. Adicione o campo no formulário (`Contact.tsx`)
2. Atualize a interface `EmailData` no hook
3. Modifique a API para processar o novo campo

## 🔒 Segurança

- Validação de campos obrigatórios
- Rate limiting (configurável)
- CORS configurado
- Tratamento de erros robusto

## 📊 Monitoramento

### Vercel
- Dashboard com logs em tempo real
- Métricas de performance
- Alertas de erro

### Netlify
- Logs de função no dashboard
- Métricas de uso
- Notificações de erro

## 🚨 Troubleshooting

### Erro 500
- Verifique as variáveis de ambiente
- Confirme as credenciais do email
- Verifique os logs no dashboard

### Email não chega
- Verifique a pasta de spam
- Confirme o endereço de destino
- Teste com email diferente

### CORS Error
- Verifique se a URL da API está correta
- Confirme se o CORS está configurado

## 💡 Dicas

1. **Teste sempre localmente primeiro**
2. **Use emails de teste antes de ir para produção**
3. **Configure notificações de erro**
4. **Monitore o uso da API gratuita**
5. **Faça backup das configurações**

## 📞 Suporte

Para dúvidas ou problemas:
- Verifique os logs no dashboard da plataforma
- Teste a API com Postman ou similar
- Consulte a documentação da plataforma escolhida

---

**Nota**: Esta API funciona mesmo sem hospedagem do site principal, pois usa serviços externos gratuitos. 