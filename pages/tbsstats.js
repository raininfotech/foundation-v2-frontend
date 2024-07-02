import { useEffect, useState } from "react";

export default function Tbs() {

    const [list, setlist] = useState([])
    const [pending, setpending] = useState(0)
    const [orphaned, setorphaned] = useState(0)
    const [coinname, setcoinname] = useState([])

    useEffect(() => {
        setcoinname(process.env.COIN_NAME)
        getdata()
        getpendingcnt()
    }, [])

    const getdata = async () => {
        const resp = await fetch(`${process.env.APIURL}/tabstats-list`, {
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const response = await resp.json();
        if (response.status) {
            setlist(response.data.body)
        }
    }

    const getpendingcnt = async () => {
        const resp = await fetch(`${process.env.APIURL}/tabstats-pending`, {
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const response = await resp.json();
        if (response.status) {
            setpending(response.data)
        }
    }

    const convertHashrate = (hashrate) => {
        hashrate = hashrate || 0
        let rate = parseFloat(hashrate / 1000).toFixed(4) + " KH"
        if (hashrate > 1000000000000000) {
            rate = parseFloat(hashrate / 1000).toFixed(2) + " PH"
        } else if (hashrate > 1000000000000) {
            rate = parseFloat(hashrate / 1000000000000).toFixed(2) + " TH"
        } else if (hashrate > 1000000000) {
            rate = parseFloat(hashrate / 1000000000).toFixed(2) + " GH"
        } else if (hashrate > 1000000) {
            rate = parseFloat(hashrate / 1000000).toFixed(2) + " MH"
        }
        return rate
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h3 className="col-12 headtitle fs30 mb-4">{coinname} Tab Stats </h3>
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped text-center">
                                <thead>
                                    <tr>
                                        <th>Pool</th>
                                        <th>Algo</th>
                                        <th>Workers</th>
                                        <th>Valid Shares</th>
                                        <th>Invalid Shares</th>
                                        <th>Total Blocks</th>
                                        <th>Hashrate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {list.length > 0 ? list.map((p, k) => {
                                        return <tr key={k}>
                                            <td>{coinname}</td>
                                            <td>sha256d</td>
                                            <td>{p.workers}</td>
                                            <td>{p.valid}</td>
                                            <td>{p.invalid}</td>
                                            <td>{p.blocks}</td>
                                            <td>{convertHashrate(p.hashrate)}</td>
                                        </tr>
                                    }) :
                                        <tr>
                                            <td colSpan={10}>
                                                <div className="col-12 p-5 text-center">
                                                    <h3>No Data Found</h3>
                                                </div>
                                            </td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}