import { useRouter } from "next/router";
import Card from "../../components/Card";
import Layout from "../../components/Layout";

export default function Character() {
  const router = useRouter();
  const id = router.query.slug;
  console.log(id);

  return (
    <Layout>
      <Card id={id} name={"Luke Skywalker"} height={172} eyeColor={"blue"} birthYear={"19BBY"} />
    </Layout>
  );
}
