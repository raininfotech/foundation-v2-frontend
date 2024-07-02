export default async function PaymentList(req, res) {
    let resData = [false, [], 'Session expired! Please try again.'];
    let backend_api = process.env.BACKEND_API
    let pool_name = process.env.POOL_NAME

    try {
        let { search } = req.body
        let url = `${backend_api}/${pool_name}/historical/payments`
        if (search) {
            url = `${backend_api}/${pool_name}/historical/payments?miner=${search}`
        }
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            resData[0] = true;
            resData[1] = await response.json();
            resData[2] = '';
        } else {
            console.error(`HTTP error! status: ${response.status}`);
        }
    } catch (e) {
        console.error('Error fetching data:', e.message);
    }

    return res.json({ status: resData[0], data: resData[1], oth: resData[2] });
}
