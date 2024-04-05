

export default function Mileage() {

    return (
        <div className="Mileage">
            <div className="tableWrapper w-50 m-auto">
                <h2 className="text-center mb-5">마일리지</h2>
                <table className="table">
                    <tbody>
                        <tr>
                            <th className="pb-4 pt-4 text-start">총 적립금</th>
                            <td className="pb-4 pt-4 text-end">x원</td>
                        </tr>
                        <tr>
                            <th className="pb-4 pt-4 text-start">사용가능 적립금</th>
                            <td className="pb-4 pt-4 text-end">x원</td>
                        </tr>
                        <tr>
                            <th className="pb-4 pt-4 text-start">사용된 적립금</th>
                            <td className="pb-4 pt-4 text-end">x원</td>
                        </tr>
                        <tr>
                            <th className="pb-4 pt-4 text-start">미가용 적립금</th>
                            <td className="pb-4 pt-4 text-end">x원</td>
                        </tr>
                        <tr>
                            <th className="pb-4 pt-4 text-start">환불예정 적립금</th>
                            <td className="pb-4 pt-4 text-end">x원</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <ul className='d-flex flex-column text-start w-50 m-auto'>
                <li><a href="/">적립내역</a></li>
                <li><a href="/">미가용 적립내역</a></li>
                <li><a href="/">미가용쿠펀/회원등급 적립내역</a></li>
            </ul>
        </div>
    )
}