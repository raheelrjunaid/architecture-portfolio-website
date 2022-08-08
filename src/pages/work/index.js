import { useRouter } from "next/router";
import MainImage from "../../components/MainImage";

export const WorkPage = () => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-3 gap-4">
      {[...Array(9)].map((_, index) => (
        <MainImage
          key={index}
          title="Random"
          imageUrl="https://dummyimage.com/600x400/000/fff"
          link={`${router.pathname}/random`}
        />
      ))}
    </div>
  );
};
export default WorkPage;
