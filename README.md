<div align="center">

<img alt="Branding" src="./public/assets/images/logo.png">

![GitHub License](https://img.shields.io/github/license/TG000/bookland)

##### A fully functional online book / story reading web app built on NextJS for learning purpose.

</div>

Bookland is an web application that creates a vibrant online community for book lovers and aspiring writers, allows users to both read and share original books and stories, fostering a collaborative environment for literary enthusiasts.

## Technologies

- Full stack (Frontend - Backend): NextJS
- Frameworks: Shadcn, TailwindCSS
- ORM: Prisma
- Database: PostgreSQL
- Hosting Service: Supabase

## Getting Started

### Prerequisites

- Node Package Manager (npm)

  ```shell
  npm install npm@latest -g
  ```

### Installation

Follow the below guide to install the project locally:

1. Clone the project repository

   ```shell
   git clone https://github.com/TG000/bookland.git
   ```

2. Install npm packages

   ```shell
   npm install
   ```

3. Create an .env file at the root folder

   ```
   # Product
   NODE_ENV="development" # development or production

   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=<your_supabase_url>
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<your_supabase_key>

   # OAuth
   GOOGLE_CLIENT_ID=<your_google_oauth_client_id>
   GOOGLE_CLIENT_SECRET=<your_google_oauth_client_secret>

   # Database
   DATABASE_URL=<your_database_url>
   DIRECT_URL=<your_direct_url>
   ```
