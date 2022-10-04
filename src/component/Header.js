function Header (props) {
    return (
        <>
            <h1 className= {props.className}>Tổng Tiền {props.total}</h1>
            <h1 className= {props.className}>Tổng Số Lượng Hàng đã chọn {props.quantity}</h1>
            <h1 className= {props.className}>Tổng Số Lượng Hàng đã trả tiền {props.Qpaid}</h1>
        </>
        
    )
}
export default Header