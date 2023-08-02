import PageTitle from "@/components/PageTitle"
import Providers from "@/components/Providers"
import DB from "@/config/DB"
import CompanyForm from "./Form";
import { Company } from "@/types/Company";

export const dynamic = 'force-dynamic'


const getCompanyInfo = async () => {
    const result = await DB.collection('companies').getList<Company>(1, 20, {});
    const data = result.items.map((record) => ({...record}));
    return data[0];
}

const page = async () => {
    const companyData = await getCompanyInfo();
  return (
    <div>
        <PageTitle title="Company Information" />
        <Providers>
            <CompanyForm company={companyData} />
        </Providers>    

    </div>
  )
}

export default page