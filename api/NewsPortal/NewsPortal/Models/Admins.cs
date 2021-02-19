using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NewsPortal.Models
{
    public class Admins
    {
        public int AdminsId { get; set; }
        public string AdminsUsername { get; set; }

        public string AdminsPasword { get; set; }
    }
}