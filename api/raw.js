export default function handler(req, res) {
    try {
        const rawData = {
            method: req.method,
            url: req.url,
            headers: req.headers, // සම්පූර්ණ headers ටික
            query: req.query,
            body: req.body,
            vercelInfo: {
                city: req.headers['x-vercel-ip-city'] || "Unknown",
                country: req.headers['x-vercel-ip-country'] || "Unknown",
                ip: req.headers['x-forwarded-for'] || "Unknown"
            }
        };
        res.status(200).json(rawData);
    } catch (error) {
        res.status(500).json({ error: "Server Error", details: error.message });
    }
}
