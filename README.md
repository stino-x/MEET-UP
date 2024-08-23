# MEET-UP - Video Conferencing Platform

## Description

**MEET-UP** is a modern video conferencing platform designed to provide seamless communication for businesses, educators, and individuals. Built with cutting-edge technologies, MEET-UP offers high-quality video calls, screen sharing, and real-time chat. The platform leverages **Next.js** for a robust frontend, **Clerk** for secure authentication, and **Stream** for powerful video and chat capabilities.

## Live Demo

**Experience MEET-UP in action!**
👉 [Click here to try MEET-UP live](https://meet-up-phi.vercel.app/)

## Features

- **User Authentication**: Powered by Clerk, users can securely sign up, log in, and manage their profiles.
- **Video Conferencing**: High-quality video calls with multiple participants.
- **Screen Sharing**: Share your screen or specific application windows during calls.
- **Meeting Scheduling**: Create and manage scheduled meetings with calendar integration.
- **Custom Backgrounds**: Option to blur or use custom backgrounds during video calls.
- **Recording**: Record meetings for future reference (optional feature).
- **Responsive Design**: Fully responsive and accessible across all devices.


## Technologies Used

- **Frontend**: 
  - Next.js
  - React.js
  - Tailwind CSS

- **Backend**:
  - Next.js API routes
  - Node.js

- **Authentication**:
  - Clerk

- **Video & Chat SDK**:
  - Stream

- **Hosting**:
  - Vercel

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v14.x or higher)
- npm or Yarn

### Installation

1. **Clone the Repository**:

   git clone https://github.com/stino-x/MEET-UP.git
   cd meet-up

2. **Install Dependencies**:

   npm install
   # or
   yarn install

3. **Set Up Environment Variables**:

   Create a `.env.local` file in the root of your project and add the following:

   # Clerk (Authentication)
   NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
   CLERK_API_KEY=your_clerk_api_key
   CLERK_JWT_KEY=your_clerk_jwt_key

   # Stream
   NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
   STREAM_API_SECRET=your_stream_api_secret

   # Next.js
   NEXT_PUBLIC_APP_URL=http://localhost:3000

4. **Run the Development Server**:

   npm run dev
   # or
   yarn dev

   Your application will be available at `http://localhost:3000`.

## Deployment

1. **Vercel Deployment**:
   - Connect your GitHub repository to Vercel.
   - Vercel will automatically detect Next.js and set up the build configuration.
   - Set up your environment variables in the Vercel dashboard.

2. **Environment Variables**:
   Ensure all environment variables are correctly set in your Vercel project settings.

3. **Deploy**:
   Vercel will automatically deploy your application when you push to the main branch.

## Usage

1. Sign up or log in to your MEET-UP account.
2. Create a new meeting or join an existing one using a meeting ID.
3. Use the video and audio controls to manage your call settings.
4. Share your screen or use the chat feature as needed during the meeting.
5. End the call when finished.

## Troubleshooting

- **Video Not Working**: Ensure your camera permissions are enabled in your browser settings.
- **Audio Issues**: Check your microphone settings and ensure the correct input device is selected.
- **Connection Problems**: Verify your internet connection and try refreshing the page.

## Contributing

We welcome contributions! Please fork the repository and submit a pull request with your proposed changes or improvements.

## License

This project is licensed under the MIT License.

## Contact

For support or inquiries, please contact us at support@meetup-app.com.
