import SectionTitle from "./SectionTitle"

const Section = ({title, children} : {title: string,  children: React.ReactNode}) => {
  return (
    <div className="mb-8">
        <SectionTitle title={title} />

        <div className="flex flex-col space-y-4">
            {children}
        </div>
    </div>
  )
}

export default Section