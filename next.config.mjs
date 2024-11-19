/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: '*'
			},
			{
				hostname: 'lh3.googleusercontent.com'
			},
			{
				hostname: 'utfs.io'
			},
			{
				hostname: 'uploadthing-prod-sea1.s3.us-west-2.amazonaws.com'
			},
			{
				hostname: 'avatars.githubusercontent.com'
			}
		]
	}
};

export default nextConfig;
