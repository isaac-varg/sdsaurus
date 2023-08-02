import Link from "next/link"
import { Button } from "@/components/ui/button"

type MenuItemProps = {
    icon: JSX.Element
    title: string
    path: string
    status: boolean
}

const MenuItem = ({ icon, title, path, status }: MenuItemProps) => {

    return <Link href={path}>
        <div className="space-y-1">
            <button className={`flex px-4 py-3 w-full text-left items-center justify-start space-x-2 ${status ? 'bg-emerald-700' : 'bg-stone-400'}`}>
                <div className="text-lg" >
                    {icon}
                </div>
                <h3>{title}</h3>
            </button>
        </div>
    </Link >


}

export default MenuItem