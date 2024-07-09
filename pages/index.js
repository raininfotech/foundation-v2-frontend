import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {

    const [list, setlist] = useState([])
    const [coinname, setcoinname] = useState([])
    const [stratum, setstratum] = useState([])

    useEffect(() => {
        setstratum(process.env.STRATRUM_URL)
        setcoinname(process.env.COIN_NAME)
        getdata()
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

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-12 col-12 mb-4">
                                <div className="card">
                                    <div className="card-header">
                                        <h6 className="headtitle">Global Stats</h6>
                                    </div>
                                    <div className="card-body">
                                        <div className="row text-center">
                                            <h5 className="custh5"><i className="fa fa-flask fs-6 me-2"></i>sha256d</h5>
                                            <h5 className="custh5"><i className="fa fa-users fs-6 me-2"></i>{list[0]?.miners} Miners</h5>
                                            <h5 className="custh5"><i className="fa fa-tachometer fs-6 me-2"></i>{parseFloat((list[0]?.hashrate || 0) / 1000000).toFixed(2)} MH</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-12 mb-4">
                                <div className="card">
                                    <div className="card-header">
                                        <h6 className="headtitle">Pools / Coins</h6>
                                    </div>
                                    <div className="card-body">
                                        <div className="row text-center">
                                            <h5 className="custh5"><i className="fa fa-dot-circle-o fs-6 me-2"></i>{coinname} coin</h5>
                                            <h5 className="custh5"><i className="fa fa-users fs-6 me-2"></i>{list[0]?.miners} Miners</h5>
                                            <h5 className="custh5"><i className="fa fa-tachometer fs-6 me-2"></i>{parseFloat((list[0]?.hashrate || 0) / 1000000).toFixed(2)} MH</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-12 mb-4">
                                <div className="card">
                                    <div className="card-header">
                                        <h6 className="headtitle">Configuration</h6>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <h5 className="custh5">Username: your {coinname} wallet address</h5>
                                            <h5 className="custh5">Password: anything </h5>
                                            <h5 className="custh5">URL: {stratum}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12 mb-3">
                        <h4 className="headtitle fs30">Guide</h4>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-12 col-12 mb-4">
                                <div className="card h-100">
                                    <div className="card-header">
                                        <div className="row">
                                            <div className="col-md-4 col-12 mb-3 m-auto">
                                                <h6 className="headtitle">For Windows</h6>
                                            </div>
                                            <div className="col-12 col-md-8 d-flex justify-content-end mb-3">
                                                <Link href="/download/minerd-32bit.zip" target="_blank" download="minerd-32bit.zip" className="btn btn-success me-3">
                                                    WIN32
                                                </Link>
                                                <Link href="/download/minerd-64bit.zip" target="_blank" download="minerd-64bit.zip" className="btn btn-success">
                                                    WIN64
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12">
                                                <ul>
                                                    <li className="listyle">unzip pooler-cpuminer-2.5.1-win64.zip</li>
                                                    <li className="listyle">open CMD</li>
                                                    <li className="listyle">minerd.exe -a sha256d -o {stratum} -O your {coinname} wallet address:Any password</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-12 mb-4">
                                <div className="card h-100">
                                    <div className="card-header">
                                        <div className="row">
                                            <div className="col-md-4 col-12 mb-3 m-auto">
                                                <h6 className="headtitle">For Linux</h6>
                                            </div>
                                            <div className="col-12 col-md-8 d-flex justify-content-end mb-3">
                                                <Link href="/download/minerdlinux.tar" target="_blank" download="minerdlinux.tar" className="btn btn-success">
                                                    Download
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12">
                                                <ul>
                                                    <li className="listyle">tar -xzvf pooler-cpuminer-2.5.1-linux-x86_64.tar.gz</li>
                                                    <li className="listyle">./minerd -a sha256d -o {stratum} -O your {coinname} wallet address:Any password</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-12 mb-4">
                                <div className="card h-100">
                                    <div className="card-header">
                                        <div className="row">
                                            <div className="col-md-4 col-12 mb-3 m-auto">
                                                <h6 className="headtitle">For MacOS</h6>
                                            </div>
                                            <div className="col-12 col-md-8 d-flex justify-content-end mb-3">
                                                <Link href="/download/minerd-mac.zip" target="_blank" download="minerd-mac.zip" className="btn btn-success">
                                                    Download
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12">
                                                <ul>
                                                    <li className="listyle">unzip pooler-cpuminer-2.5.1-osx64.zip</li>
                                                    <li className="listyle">open CMD</li>
                                                    <li className="listyle">./minerd -a sha256d -o {stratum} -O your {coinname} wallet address:Any password</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export async function getServerSideProps({ req }) {
    return { props: { title: 'Home' } }
}
