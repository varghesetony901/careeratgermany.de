/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.ytimg.com',
            
          },
          {
            protocol: "https",
            hostname: "careeratgermany-de.vercel.app",
          },
          {
            protocol: "https",
            hostname: "career-at-germany-de.s3.ap-south-1.amazonaws.com",
          },
        ],
      },
}
 
module.exports = nextConfig
 