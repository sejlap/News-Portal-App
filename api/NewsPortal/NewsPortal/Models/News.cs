using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NewsPortal.Models
{
    public class News
    {
        public int NewsId { get; set; }
        public string NewsTitle { get; set;  }

        public string NewsText { get; set; }
        public string PhotoFileName { get; set; }

}
}