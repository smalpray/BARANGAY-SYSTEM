import Layout from "../layout";
import ActivitiesSection from "./sections/activities-section";
import FeaturedOnSection from "./sections/featured-on-section";
import FooterSection from "./sections/footer-section";
import HeroSection from "./sections/hero-section";
import OfferSection from "./sections/offer-section";
import ShopSection from "./sections/shop-section";

export default function Page() {
    return (
        <Layout>
            <HeroSection />
            <OfferSection />
            <ActivitiesSection/>
            <FeaturedOnSection/>
            <ShopSection />
            <FooterSection />
        </Layout>
    );
}
