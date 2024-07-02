export default async function Tablistpending(req, res) {
    let resData = [false, [], 'Session expired! Please try again.'];
    let backend_api = process.env.BACKEND_API
    let pool_name = process.env.POOL_NAME

    try {
        const response = await fetch(`${backend_api}/${pool_name}/current/blocks?category=immature`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            const data = await response.json()
            console.log({ data })
            resData[0] = true;
            resData[1] = data.body.length || 0;
            resData[2] = '';
        } else {
            console.error(`HTTP error! status: ${response.status}`);
        }
    } catch (e) {
        console.error('Error fetching data:', e.message);
    }

    return res.json({ status: resData[0], data: resData[1], oth: resData[2] });
}
