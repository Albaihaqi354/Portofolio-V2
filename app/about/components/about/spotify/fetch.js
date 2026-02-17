export default async function getNowPlayingItem() {
	try {
		const response = await fetch("/api/spotify", {
			cache: "no-store",
		});

		if (!response.ok) {
			return false;
		}

		return response.json();
	} catch (error) {
		console.error("Error fetching Spotify data:", error);
		return false;
	}
}
