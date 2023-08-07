import { useState } from "react";

const Textbox = () => {
    const [email, setEmail] = useState('kiran@gmail.com')
    return (
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email"
                class="form-control"
                id="exampleFormControlInput1"
                value={email}
                onChange={e => {
                    setEmail(e.target.value);
                }}
                placeholder="name@example.com" />{email}
        </div>
    )
}
export default Textbox;