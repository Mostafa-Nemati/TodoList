import { useState } from "react";
import WelcomePanel from "./components/WelcomePanel";

const test = () => {
    const [theme, setTheme]= useState('light');
    const [currentUser, setCurrentUser] = useState(null);

    return (
        <div className="w-96 h-screen m-auto flex items-center">
            <div className="flex flex-col">
                <WelcomePanel />
                
                <label>
                    <input 
                        type="checkbox"
                        className="mt-5"
                    />
                    Use dark mode
                </label>
            </div>
        </div>
    )
}
export default test;
