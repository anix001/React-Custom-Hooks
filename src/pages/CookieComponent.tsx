import { useCookie } from "../hooks/useCookie"

export default function CookieComponent() {
    const [cookieValue, updateCookie, deleteCookie] = useCookie("name", "anix001")

    return (
        <>
            <div>{cookieValue}</div>
            <button onClick={() => updateCookie("Sally")}>Change Name To Sally</button>
            <button onClick={deleteCookie}>Delete Name</button>
        </>
    )
}