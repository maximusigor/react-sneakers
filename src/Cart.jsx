export const Cart = ({ children, age }) => (
        <div>
            <h2>{children}</h2>
            <pre>{age}</pre>
            <ul className="d-flex">
                <li className="mr-30">
                    <img width = {18} height={18} src='/img/cart.svg' alt="cart" />
                    <span>735грн.</span>
                </li>
                <li>
                    <img width = {18} height={18} src='/img/user.svg' alt="user" />
                </li>
            </ul>
        </div>
);
