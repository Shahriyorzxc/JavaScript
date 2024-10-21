# Dockerfile
FROM node:16

# Ishchi katalogni yarating
WORKDIR /usr/src/app

# package.json va package-lock.json fayllarini ko'chiring
COPY package*.json ./

# Bog'liqliklarni o'rnating
RUN npm install

# Dastur fayllarini ko'chiring
COPY . .

# TypeScript-ni transpile qilish
RUN npm run build

# Dasturiy ta'motni ishga tushirish
CMD ["npm", "start"]
