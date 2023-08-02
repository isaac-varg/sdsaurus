"use client"
import { TbBoxSeam, TbBuilding, TbBottle, TbDiamonds } from 'react-icons/tb'
import MenuItem from './MenuItem'
import SectionTitle from "./SectionTitle"
import { title } from 'process'
import Section from './Section'
import { useAppSelector } from '@/redux/hooks'
import { selectProductInfo } from '@/redux/statusSlice'


const Sidebar = () => {
    const statusProductInfo = useAppSelector(selectProductInfo)
    
    return (
        <div className="flex flex-col min-h-screen bg-white w-64 border-r pt-4">
            <div className="px-3 py-2">
                <Section title='Basics' >
                    <MenuItem icon={<TbBoxSeam />} title={"Product Info"} path="/basics/product" status={statusProductInfo} />
                    <MenuItem icon={<TbBuilding />} title={"Company Info"} path="/basics/company" />
                </Section>

                <Section title='Classifications'>
                    <MenuItem icon={<TbBottle />} title='Hazardous Components' path="/classifications/components" />
                    <MenuItem icon={<TbDiamonds />} title='Triggered Classifications' path="/classifications/classes" />

                    <MenuItem icon={<TbDiamonds />} title='Home' path="/" />

                </Section>



            </div>

        </div>
    )
}

export default Sidebar