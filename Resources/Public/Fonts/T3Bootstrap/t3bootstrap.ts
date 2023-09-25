export type T3bootstrapId =
  | "adjust"
  | "book-reader"
  | "calendar-alt"
  | "chevron-circle-up"
  | "chevron-down"
  | "chevron-left"
  | "chevron-right"
  | "chevron-up"
  | "circle"
  | "clock"
  | "coffee"
  | "desktop"
  | "envelope"
  | "external-link-alt"
  | "facebook-f"
  | "facebook-square"
  | "file-alt"
  | "file-archive"
  | "file-audio"
  | "file-code"
  | "file-excel"
  | "file-image"
  | "file-pdf"
  | "file-powerpoint"
  | "file-video"
  | "file-word"
  | "file"
  | "github-alt"
  | "github-square"
  | "grin"
  | "home"
  | "instagram-square"
  | "instagram"
  | "linkedin-in"
  | "linkedin"
  | "list-alt"
  | "music"
  | "pinterest-p"
  | "pinterest-square"
  | "pinterest"
  | "play-circle"
  | "question-circle"
  | "tag"
  | "twitter-square"
  | "twitter"
  | "typo3"
  | "user"
  | "whatsapp-square"
  | "whatsapp"
  | "xing-square"
  | "xing"
  | "youtube-square"
  | "youtube";

export type T3bootstrapKey =
  | "Adjust"
  | "BookReader"
  | "CalendarAlt"
  | "ChevronCircleUp"
  | "ChevronDown"
  | "ChevronLeft"
  | "ChevronRight"
  | "ChevronUp"
  | "Circle"
  | "Clock"
  | "Coffee"
  | "Desktop"
  | "Envelope"
  | "ExternalLinkAlt"
  | "FacebookF"
  | "FacebookSquare"
  | "FileAlt"
  | "FileArchive"
  | "FileAudio"
  | "FileCode"
  | "FileExcel"
  | "FileImage"
  | "FilePdf"
  | "FilePowerpoint"
  | "FileVideo"
  | "FileWord"
  | "File"
  | "GithubAlt"
  | "GithubSquare"
  | "Grin"
  | "Home"
  | "InstagramSquare"
  | "Instagram"
  | "LinkedinIn"
  | "Linkedin"
  | "ListAlt"
  | "Music"
  | "PinterestP"
  | "PinterestSquare"
  | "Pinterest"
  | "PlayCircle"
  | "QuestionCircle"
  | "Tag"
  | "TwitterSquare"
  | "Twitter"
  | "Typo3"
  | "User"
  | "WhatsappSquare"
  | "Whatsapp"
  | "XingSquare"
  | "Xing"
  | "YoutubeSquare"
  | "Youtube";

export enum T3bootstrap {
  Adjust = "adjust",
  BookReader = "book-reader",
  CalendarAlt = "calendar-alt",
  ChevronCircleUp = "chevron-circle-up",
  ChevronDown = "chevron-down",
  ChevronLeft = "chevron-left",
  ChevronRight = "chevron-right",
  ChevronUp = "chevron-up",
  Circle = "circle",
  Clock = "clock",
  Coffee = "coffee",
  Desktop = "desktop",
  Envelope = "envelope",
  ExternalLinkAlt = "external-link-alt",
  FacebookF = "facebook-f",
  FacebookSquare = "facebook-square",
  FileAlt = "file-alt",
  FileArchive = "file-archive",
  FileAudio = "file-audio",
  FileCode = "file-code",
  FileExcel = "file-excel",
  FileImage = "file-image",
  FilePdf = "file-pdf",
  FilePowerpoint = "file-powerpoint",
  FileVideo = "file-video",
  FileWord = "file-word",
  File = "file",
  GithubAlt = "github-alt",
  GithubSquare = "github-square",
  Grin = "grin",
  Home = "home",
  InstagramSquare = "instagram-square",
  Instagram = "instagram",
  LinkedinIn = "linkedin-in",
  Linkedin = "linkedin",
  ListAlt = "list-alt",
  Music = "music",
  PinterestP = "pinterest-p",
  PinterestSquare = "pinterest-square",
  Pinterest = "pinterest",
  PlayCircle = "play-circle",
  QuestionCircle = "question-circle",
  Tag = "tag",
  TwitterSquare = "twitter-square",
  Twitter = "twitter",
  Typo3 = "typo3",
  User = "user",
  WhatsappSquare = "whatsapp-square",
  Whatsapp = "whatsapp",
  XingSquare = "xing-square",
  Xing = "xing",
  YoutubeSquare = "youtube-square",
  Youtube = "youtube",
}

export const T3BOOTSTRAP_CODEPOINTS: { [key in T3bootstrap]: string } = {
  [T3bootstrap.Adjust]: "61697",
  [T3bootstrap.BookReader]: "61698",
  [T3bootstrap.CalendarAlt]: "61699",
  [T3bootstrap.ChevronCircleUp]: "61700",
  [T3bootstrap.ChevronDown]: "61701",
  [T3bootstrap.ChevronLeft]: "61702",
  [T3bootstrap.ChevronRight]: "61703",
  [T3bootstrap.ChevronUp]: "61704",
  [T3bootstrap.Circle]: "61705",
  [T3bootstrap.Clock]: "61706",
  [T3bootstrap.Coffee]: "61707",
  [T3bootstrap.Desktop]: "61708",
  [T3bootstrap.Envelope]: "61709",
  [T3bootstrap.ExternalLinkAlt]: "61710",
  [T3bootstrap.FacebookF]: "61711",
  [T3bootstrap.FacebookSquare]: "61712",
  [T3bootstrap.FileAlt]: "61713",
  [T3bootstrap.FileArchive]: "61714",
  [T3bootstrap.FileAudio]: "61715",
  [T3bootstrap.FileCode]: "61716",
  [T3bootstrap.FileExcel]: "61717",
  [T3bootstrap.FileImage]: "61718",
  [T3bootstrap.FilePdf]: "61719",
  [T3bootstrap.FilePowerpoint]: "61720",
  [T3bootstrap.FileVideo]: "61721",
  [T3bootstrap.FileWord]: "61722",
  [T3bootstrap.File]: "61723",
  [T3bootstrap.GithubAlt]: "61724",
  [T3bootstrap.GithubSquare]: "61725",
  [T3bootstrap.Grin]: "61726",
  [T3bootstrap.Home]: "61727",
  [T3bootstrap.InstagramSquare]: "61728",
  [T3bootstrap.Instagram]: "61729",
  [T3bootstrap.LinkedinIn]: "61730",
  [T3bootstrap.Linkedin]: "61731",
  [T3bootstrap.ListAlt]: "61732",
  [T3bootstrap.Music]: "61733",
  [T3bootstrap.PinterestP]: "61734",
  [T3bootstrap.PinterestSquare]: "61735",
  [T3bootstrap.Pinterest]: "61736",
  [T3bootstrap.PlayCircle]: "61737",
  [T3bootstrap.QuestionCircle]: "61738",
  [T3bootstrap.Tag]: "61739",
  [T3bootstrap.TwitterSquare]: "61740",
  [T3bootstrap.Twitter]: "61741",
  [T3bootstrap.Typo3]: "61742",
  [T3bootstrap.User]: "61743",
  [T3bootstrap.WhatsappSquare]: "61744",
  [T3bootstrap.Whatsapp]: "61745",
  [T3bootstrap.XingSquare]: "61746",
  [T3bootstrap.Xing]: "61747",
  [T3bootstrap.YoutubeSquare]: "61748",
  [T3bootstrap.Youtube]: "61749",
};
