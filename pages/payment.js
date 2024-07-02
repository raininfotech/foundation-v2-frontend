import Link from "next/link";
import { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';

const moment = require('moment');
moment.suppressDeprecationWarnings = true;

export default function Tbs() {

    const [list, setlist] = useState([])
    const [search, setsearch] = useState('')

    const [currentItems, setcurrentItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [remain, setremain] = useState(0);

    const itemsPerPage = 13;

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
        const newPage = event.selected;
        setCurrentPage(newPage);

        const offset = newPage * itemsPerPage;
        const newCurrentItems = list.slice(offset, offset + itemsPerPage);
        setcurrentItems(newCurrentItems);
        const remainingPages = Math.ceil(list.length / itemsPerPage);
        setremain(remainingPages);
    };

    useEffect(() => {
        searchlist()
    }, [])

    const searchlist = async () => {
        const resp = await fetch(`${process.env.APIURL}/payment-list`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ search })
        });
        const response = await resp.json();
        if (response.status) {
            setCurrentPage(0);
            const reslist = response.data.body

            setlist(reslist.reverse())
            const offset = currentPage * itemsPerPage;
            setcurrentItems(reslist.slice(offset, offset + itemsPerPage))
            setremain(Math.ceil(reslist.length / itemsPerPage))

            let sum = 0
            for (let a of reslist) {
                sum += a.amount
            }

        } else {
            setlist([])
        }
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped text-center">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Miner Address</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentItems.length > 0 ? currentItems.map((p, k) => {
                                        return <tr key={k}>
                                            <td>{moment(parseInt(p.timestamp)).format('DD, MMM YYYY hh:mm A')}</td>
                                            <td>{p.miner ?
                                                <Link href={`${process.env.EXP_URL}/address/${p.miner}`} target="_blank">{p.miner}</Link> : '-'
                                            }</td>
                                            <td>{p.amount.toLocaleString()} BTCS</td>
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
                        {currentItems.length > 0 ? <div className="pagination-box position-relative float-end">
                            <ReactPaginate
                                previousLabel={<i className="fa fa-angle-left" />}
                                nextLabel={<i className="fa fa-angle-right" />}
                                breakLabel={"..."}
                                breakClassName={"break-me"}
                                pageCount={remain}
                                forcePage={currentPage}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={handlePageClick}
                                containerClassName={"pagination"}
                                subContainerClassName={"pages pagination"}
                                activeClassName={"active"}
                            />
                        </div> : ''}
                    </div>
                </div>
            </div >
        </>
    );
}