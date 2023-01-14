import { useEffect, useState } from "react";

interface IUsers {
    name: string;
    isChecked?: boolean;
}

const userData = [
    { name: "Jeevan" },
    { name: "Manish" },
    { name: "Prince" },
    { name: "Arti" },
    { name: "rahul" },
];

function CheckboxSelekt() {
    const [users, setUsers] = useState<Array<IUsers>>([]);

    useEffect(() => {
        setUsers(userData);
    }, []);

    const handleChange = (e: any) => {
        const { name, checked } = e.target;
        if (name === "allSelect") {
            let tempUser = users.map((user) => {
                return { ...user, isChecked: checked };
            });
            setUsers(tempUser);
        } else {
            let tempUser = users.map((user) =>
                user.name === name ? { ...user, isChecked: checked } : user
            );
            setUsers(tempUser);
        }
    };

    return (
        <div style={{ width: "100%" }}>
            <form>
                <h3>Select Users</h3>
                <div>
                    <input
                        type="checkbox"
                        name="allSelect"
                        // checked={
                        //     users.filter((user) => user?.isChecked !== true)
                        //         .length < 1
                        // }
                        checked={
                            !users.some((user) => user?.isChecked !== true)
                        }
                        onChange={handleChange}
                    />
                    <label>All Select</label>
                </div>
                {users.map((user, index) => (
                    <div style={{ marginLeft: "20px" }} key={index}>
                        <input
                            type="checkbox"
                            name={user.name}
                            checked={user?.isChecked || false}
                            onChange={handleChange}
                        />
                        <label>{user.name}</label>
                    </div>
                ))}
            </form>
        </div>
    );
}

export default CheckboxSelekt;
