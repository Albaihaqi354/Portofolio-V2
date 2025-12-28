import Footer from "@/components/Footer";

export const metadata = {
  title: "Bian Albaihaqi | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
