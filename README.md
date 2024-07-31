<div align="center">

</picture>
<img alt="Branding" src="./public/assets/images/logo.png">
<picture>

![GitHub Contributors][github_contributors]
![GitHub Release][github_release]
![GitHub License][github_license]

##### An online web app where users can read and share books and stories.

**[Official Website][website] &middot; [Request Feature][request_feature] &middot; [Report Bug][report_bug]**

</div>

<details>

<summary>Table of contents</summary>

[1. Overview](#overview) <br>
[2. Getting Started](#getting-started) <br>
&emsp;[&middot; Prerequisites](#prerequisites) <br>
&emsp;[&middot; Installation](#installation) <br>

</details>

## Overview

Bookland is an web application that creates a vibrant online community for book lovers and aspiring writers, allows users to both read and share original books and stories, fostering a collaborative environment for literary enthusiasts.

### Technologies

- [![][nextjs]][nextjs-url]
- [![][shadcn]][shadcn-url]
- [![][tailwindcss]][tailwindcss-url]
- [![][prisma]][prisma-url]
- [![][supabase]][supabase-url]
- [![][postgresql]][postgresql-url]

## Getting Started

### Prerequisites

- Node Package Manager (npm)
- PostgreSQL

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

4. Setup your database tables with Prisma

   _Feel free to remove the migrations from prisma/migrations before doing this or just leave it as it is._

   ```shell
    npx prisma migrate dev --name <migration_name>
   ```

[github_contributors]: https://img.shields.io/github/contributors/TG000/bookland?color=green
[github_release]: https://img.shields.io/github/v/release/TG000/bookland?color=blue
[github_license]: https://img.shields.io/github/license/TG000/bookland?color=blue
[website]: http://localhost:3000/
[request_feature]: http://
[report_bug]: http://
[nextjs]: https://img.shields.io/badge/NextJS-black?style=for-the-badge&logo=nextdotjs
[nextjs-url]: https://nextjs.org/
[shadcn]: https://img.shields.io/badge/ShadCN-black?style=for-the-badge&logo=shadcn/ui
[shadcn-url]: https://ui.shadcn.com/
[tailwindcss]: https://img.shields.io/badge/TailwindCSS-161d2d?style=for-the-badge&logo=tailwindcss
[tailwindcss-url]: https://tailwindcss.com/
[prisma]: https://img.shields.io/badge/Prisma-1a202c?style=for-the-badge&logo=prisma
[prisma-url]: https://www.prisma.io/
[supabase]: https://img.shields.io/badge/Supabase-1c1c1c?style=for-the-badge&logo=supabase
[supabase-url]: https://supabase.com/
[postgresql]: https://img.shields.io/badge/PostgreSQL-3c366b?style=for-the-badge&logo=postgresql
[postgresql-url]: https://www.postgresql.org/
