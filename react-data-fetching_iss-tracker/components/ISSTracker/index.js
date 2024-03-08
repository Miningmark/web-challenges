import useSWR from "swr";
import Controls from "../Controls/index";
import Map from "../Map/index";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch ISS coordinates");
  }
  return response.json();
};

export default function ISSTracker() {
  const { data, error, mutate } = useSWR(URL, fetcher, {
    refreshInterval: 5000,
  });

  if (error) {
    console.error(error);
  }

  function handleRefresh() {
    mutate();
  }

  return (
    <main>
      <Map longitude={data?.longitude || 0} latitude={data?.latitude || 0} />
      <Controls
        longitude={data?.longitude || 0}
        latitude={data?.latitude || 0}
        onRefresh={handleRefresh}
      />
    </main>
  );
}
