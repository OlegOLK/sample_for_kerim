using kerim2.Models;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace kerim2.Controllers;

[ApiController]
[Route("api/[controller]")]
public class DataController : ControllerBase
{
    private readonly ILogger<DataController> _logger;

    private static List<Data> DataList = Enumerable.Range(0, 10).Select(x => new Data
    {
        Id = Guid.NewGuid().ToString(),
        Header = $"Header #{x}",
        Text = $"This is some text #{x}"
    }).ToList();


    public DataController(ILogger<DataController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<Data> Get()
    {
        _logger.LogInformation("Privet Kerim");
        return DataList;
    }

    [HttpPost]
    public string Post([FromBody] PostDataModel model)
    {
        var data = new Data
        {
            Id = Guid.NewGuid().ToString(),
            Header = model.Header,
            Text = model.Text
        };
        DataList.Add(data);

        return data.Id;
    }

    [HttpGet("{id}")]
    public Data GetById(string id)
    {
        return DataList.FirstOrDefault(x => x.Id.Equals(id, StringComparison.OrdinalIgnoreCase));
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(string id)
    {
        var index = DataList.FindIndex(0, x => x.Id.Equals(id, StringComparison.OrdinalIgnoreCase));
        if (index != -1)
            DataList.RemoveAt(index);

        return StatusCode(204);
    }
}


public class PostDataModel
{
    public string Header { get; set; }
    public string Text { get; set; }
}