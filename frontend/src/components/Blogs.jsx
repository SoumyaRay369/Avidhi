
import { Card } from "./Card"
import { BlogHeader } from "./BlogHeader"
import firstImage from '../assets/Marx_Smith.png'
import secondImage from '../assets/Niccolo Machiavelli.png'
 const Blogs = () => {
    return (
        <>
            <BlogHeader></BlogHeader>
            <div className="flex flex-row gap-x-3 px-3 overflow-x-auto">
                <Card imageUrl={firstImage} heading="The Old Dilemma" summaryText="Explanation of the root of All Confusion in Society"></Card>
                <Card imageUrl={secondImage} heading="The Machiavellian Dream" summaryText="Who are the Defenders of Freedom?"></Card>
                
            </div>
            
        </>
    )
}

export default Blogs