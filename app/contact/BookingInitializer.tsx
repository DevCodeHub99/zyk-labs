
'use client'

import { useEffect } from "react"
import { getCalApi } from "@calcom/embed-react";

export default function BookingInitializer() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "30min" });
      cal("ui", { "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, []);

  return null;
}
