export default function handler(req, res) {
    // සර්වර් එකට ලැබෙන ඕනෑම දෙයක් (Headers, Body, Query) මේකේ තියෙනවා
    const allServerData = {
        method: req.method,
        url: req.url,
        headers: req.headers, // මේකේ තමයි ඔක්කොම ටික තියෙන්නේ
        query: req.query,
        body: req.body,
        vercelGeo: {
            city: req.headers['x-vercel-ip-city'],
            country: req.headers['x-vercel-ip-country'],
            ip: req.headers['x-forwarded-for']
        }
    };

    res.status(200).json(allServerData);
}
