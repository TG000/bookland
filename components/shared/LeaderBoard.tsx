import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TrendingBook from "@/components/shared/TrendingBook";

const LeaderBoard = () => {
    const allTimeBooks = [
        {
            id: 1,
            title: "The Lean Startup",
            author: "Eric Ries",
            imageURL: "/assets/images/auth-image.png",
            rating: 9.9,
            views: 100,
        },
        {
            id: 2,
            title: "The Lean Startup",
            author: "Eric Ries",
            imageURL: "/assets/images/auth-image.png",
            rating: 9.9,
            views: 100,
        },
        {
            id: 3,
            title: "The Lean Startup",
            author: "Eric Ries",
            imageURL: "/assets/images/auth-image.png",
            rating: 9.9,
            views: 100,
        },
        {
            id: 4,
            title: "The Lean Startup",
            author: "Eric Ries",
            imageURL: "/assets/images/auth-image.png",
            rating: 9.9,
            views: 100,
        },
        {
            id: 5,
            title: "The Lean Startup",
            author: "Eric Ries",
            imageURL: "/assets/images/auth-image.png",
            rating: 9.9,
            views: 100,
        },
        {
            id: 6,
            title: "The Lean Startup",
            author: "Eric Ries",
            imageURL: "/assets/images/auth-image.png",
            rating: 9.9,
            views: 100,
        },
        {
            id: 7,
            title: "The Lean Startup",
            author: "Eric Ries",
            imageURL: "/assets/images/auth-image.png",
            rating: 9.9,
            views: 100,
        },
    ];

    return (
        <Tabs defaultValue="all" className="w-2/5 h-fit">
            <TabsList>
                <TabsTrigger value="all">All - Time</TabsTrigger>
                <TabsTrigger value="monthly">This Month</TabsTrigger>
                <TabsTrigger value="weekly">This Month</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
                {allTimeBooks.map((book) => (
                    <TrendingBook key={book.id} book={book} />
                ))}
            </TabsContent>
            <TabsContent value="monthly">
                Change your password here.
            </TabsContent>
            <TabsContent value="weekly">Change your password here.</TabsContent>
        </Tabs>
    );
};

export default LeaderBoard;
