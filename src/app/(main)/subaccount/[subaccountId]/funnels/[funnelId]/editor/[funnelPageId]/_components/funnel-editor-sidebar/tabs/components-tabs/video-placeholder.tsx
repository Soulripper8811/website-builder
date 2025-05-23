import { EditorBtns } from "@/lib/constants";
import { YoutubeIcon } from "lucide-react";
import React from "react";

const VideoPlaceholder = () => {
  const handleDragStart = (e: React.DragEvent, type: EditorBtns) => {
    if (type === null) return;
    e.dataTransfer.setData("componentType", type);
  };
  return (
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, "video")}
      className="h-14 w-14 bg-muted rounded-lg flex items-center justify-center"
    >
      <YoutubeIcon size={40} className="text-muted-foreground" />
    </div>
  );
};

export default VideoPlaceholder;
