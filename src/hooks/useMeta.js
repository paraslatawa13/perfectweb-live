import { useEffect, useState } from "react";
import { useMetaApi } from "../api/metas"; 
import { useLocation } from "react-router-dom";

export const useMeta = () => {
  const [meta, setMeta] = useState(null);
  const [loading, setLoading] = useState(true);
  const { geMetabySlug } = useMetaApi();
  const location = useLocation();

  useEffect(() => {
    const fetchMeta = async () => {
      try {
        setLoading(true);
        const slug = location.pathname === "/" ? "home" : location.pathname.replace(/^\/|\/$/g, "");
        const data = await geMetabySlug(slug);
        setMeta(data);
      } catch (error) {
        console.warn("No meta found for", location.pathname);
        setMeta(null);
      } finally {
        setLoading(false);
      }
    };

    fetchMeta();
  }, [location.pathname]);

  return { meta, loading };
};
