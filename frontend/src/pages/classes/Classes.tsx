import React from "react";
import EditablePage from "../../components/editable-page/EditablePage";
import { postClass } from "../../services/classes"

export default function Classes() {
  return (
    <EditablePage postEndpoint={postClass} pageTitle="CLASSES" attribute="classe" />
  )
}