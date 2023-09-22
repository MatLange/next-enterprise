import { Layout } from "../Layout"
import { StepsLayout } from "../StepsLayout"
import { NavigationButtons } from "../NavigationButtons"
import useFormStore from "../../store/form"

type GivenValueProps = {
  givenValue: string
}

const GivenValue = ({ givenValue }: GivenValueProps) => {
  return (
    <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500'>
      {givenValue}
    </span>
  )
}
const WizardResult = (props: any ) => {
  const { getValues } = props; 
  const nameAndTitle = getValues("firstName") + " " + getValues("lastName") + " ";

  const { selectedDropdownElement, radioOption, inputTextArea } =
    useFormStore()
  return (
    <Layout>
      <StepsLayout>
        <div className='flex flex-col justify-between min-w-[500px] min-h-[200px]'>
          <div className='flex flex-col gap-2'>
            <p className='text-xl'>
              Hello{" "}
              {nameAndTitle.length !== 0 ? (
                <GivenValue givenValue={`, ${nameAndTitle}`} />
              ) : (
                "there"
              )}
              !
            </p>  
            {selectedDropdownElement.id !== 0 ? (
              <p className='text-xl'>
                You said your favourite fruit is{" "}
                <GivenValue
                  givenValue={selectedDropdownElement.name
                    .slice(0, -2)
                    .toLowerCase()}
                />
                ! Delicious! 😋
              </p>
            ) : (
              <>
                <p>You havent picked anything yet! 😱</p>
                <p>Make sure you go back and pick something tasty 😉</p>
              </>
            )}
          </div>
          {radioOption === "yes" ? (
            <p>
              Your additional message: <GivenValue givenValue={inputTextArea} />
            </p>
          ) : (
            <p>You had no additional message!</p>
          )}
        </div>
      </StepsLayout>
    </Layout>
  )
}

export default WizardResult
 

/* import Link from "next/link";
import { Layout } from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <Link href="/step-one">
        <h1 className="text-[58px] md:text-[88px] lg:text-[100px] text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:from-pink-500 hover:to-yellow-500">
          Enter the form
        </h1>
      </Link>
    </Layout>
  );
};

export default Home; */