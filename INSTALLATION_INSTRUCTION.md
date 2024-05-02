# Installation Instructions

These instructions will guide you through the process of setting up and running the project locally on your machine.

## Prerequisites

Before you begin, make sure you have the following software installed on your system:

- [Node.js](https://nodejs.org/) v20.11.1
- [npm](https://www.npmjs.com/) v10.5.0
- [Git](https://git-scm.com/) v2.38.0.windows.1

## Clone the Repository

First, clone the project repository to your local machine using Git:

```bash
git clone https://github.com/your-username/Job-portal.git
```

Replace `muhammadshakkeerp` with your GitHub username and `Job-portal` with the name of your repository.

## Install Dependencies

Navigate to the project directory:

```bash
cd Job-portal
```

Install the necessary dependencies using npm:

```bash
npm install
```
### Create .env.local file on root folder, set following enviromental variables
```
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
NEXT_PUBLIC_URL=http://localhost:3000

 ```

### Create next.config.mjs & copy past this
``` 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['lh3.googleusercontent.com'],
    },
  }
  
  export default nextConfig
```

## Run the Application

Once the dependencies are installed, you can run the application:

```bash
npm run dev
```

This command will start the development server and open the project in your default web browser.
