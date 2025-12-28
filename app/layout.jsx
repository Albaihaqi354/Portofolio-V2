import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
// import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

// export const metadata = {
//     title: "Bian Albaihaqi | Portofolio",

//     description:
// 		"My name is Bian Albaihaqi, a Fullstack Developer with experience in building scalable and high-performance web applications. I am passionate about modern technologies, clean code, and well-structured architectures, with hands-on experience across backend, frontend, and deployment workflows",

//     author: "Bian Albaihaqi",
//     siteUrl: "https://www.alvalens.my.id",
//     applicationName: "Alvalens",

//     keywords: [
// 		"alvalens",
// 		"alvalen",
// 		"alvalen shafel",
// 		"shafel",
// 		"alvalen shafelbilyunazra",
// 		"alvalen shafel bilyunazra",
// 		"bloodfallen",
// 		"alvalen porto",
// 		"alvalen um",
// 	],

//     openGraph: {
// 		type: "website",
// 		url: "https://www.alvalens.my.id",
// 		title: "Alvalens | Portofolio",
// 		site_name: "Alvalens | Portofolio",
// 		description: "My name is Alvalens, This is my portofolio website.",
// 		width: 1200,
// 		height: 630,
// 		images: [
// 			{
// 				url: "/og-image-rev.png",
// 				alt: "Alvalens Portofolio",
// 			},
// 		],
// 		site_name: "Alvalens | Portofolio",
// 	}
// };

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Analytics />
			</body>
		</html>
	);
}
