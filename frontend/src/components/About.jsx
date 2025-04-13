import { Heading } from "./Heading"
export const About = () => {
    return (
        <>
            <div className='h-screen overflow-y-auto bg-black'>

                <Heading></Heading>
                <div className="text-white mt-6">
                    <div className="text-center font-playfair text-2xl">
                        Background
                    </div>

                    <div className="mt-3 flex justify-center">
                        <p className="font-playfair ml-3 mr-3 text-sm text-justify md:text-xl md:w-1/2">Throughout the Globe there has been a massive upsurge of socialism. After enjoying the fruits of capitalism throughout the past century, the world has become quite complacent and the communists and socialists have now risen to propagate their heinous agenda. Rational-minded people need to stop staying mute and raise their voices and callout every situation when either the government is promoting socialism in the name of "protecting" the "common man" or when the anti-social elements are trying to poison the minds of the unsuspecting, ignorant who has grown to blindly believe in whatever the government machinery feeds them.</p>
                    </div>

                    <div className="text-center font-playfair text-2xl mt-3">
                        Our Aim
                    </div>

                    <div className="mt-3 flex justify-center">
                        <p className="font-playfair ml-3 mr-3 text-sm text-justify md:text-xl md:w-1/2">We need to start re-educating the people about the fruits of capitalism from the scratch. We need to make them remember the gifts of the financial market and how “Shylok coming for his pound of flesh” is not really a bad thing and that advanced financial markets, in fact, increase the access to credit for the common man. We understand that in most of the developed world it is mostly about increased regulation and redundant bureaucracy(as is the case for Europe which has been perfectly depicted in the document: “Future of European Competitiveness”, put forward in the EU Parliament by Mario Draghi) than it is about realising the merits of capitalism and the globalization.
                            Which is the reason why we are starting our operations from India, a new age democracy; a country where democracy has been there from day one, resulting in friction between the attitude of the working class towards new corporations and the relative size of the economy, coupled with a useless opposition party that solely believes in socialism for vote-bank politics and has in fact included the word “socialist” in the constitution by invoking a state of unnecessary Emergency. We need to counter that narrative as soon as possible before things go out of hand and protect the Indian people from the grips of socialism, where only a few bureaucrats and their owners, ie, politicians, control the nation. </p>
                    </div>

                </div>
            </div>


        </>

    )
}

export default About