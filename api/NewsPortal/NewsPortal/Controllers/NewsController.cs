using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using NewsPortal.Models;
namespace NewsPortal.Controllers
{
    public class NewsController : ApiController
    {

        public HttpResponseMessage Get()
        {
            string query = @"
                    select NewsId, NewsTitle, NewsText, PhotoFileName  from
                    dbo.News
                    ";
            
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.
                ConnectionStrings["NewsAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);


        }

        public string Post (News n)
        {
            try
            {
                string query = @"
                    insert into dbo.News values
                    (
                    '" + n.NewsTitle + @"'
                    ,'" + n.NewsText + @"'
                    ,'" + n.PhotoFileName + @"'
                    )
                    ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["NewsAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Added Successfully!!";
            }
            catch (Exception)
            {

                return "Failed to Add!!";
            }

        }


        public string Put(News n)
        {
            try
            {
                string query = @"
                    update dbo.News set

                    NewsTitle='" + n.NewsTitle + @"'
                    ,NewsText='" + n.NewsText + @"'
                    ,PhotoFileName='" + n.PhotoFileName + @"'
                     where NewsId=" +  n.NewsId + @"
                    ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["NewsAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Updated Successfully!!";
            }
            catch (Exception)
            {

                return "Failed to Update!!";
            }

        }
    }
}
