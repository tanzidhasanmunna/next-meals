
import SearchMeals from "@/components/SearchMeals";
import styles from  "./styles.module.css"
export const metadata = {
  title: {
    absolute: "Meals"
  },
  description: "This is the page that will give us the About directive",
};
export default function page() {
    
  return (
    <div className="min-h-screen">

        <h2 className={styles.font_blue}>Search for Your Meal</h2>
        <SearchMeals/>
    </div>
  );
}
