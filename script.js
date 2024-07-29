// count total messages
var TOTAL_CHAT = 0;

function DeleteChat()
{
    if (TOTAL_CHAT > 0)
    {
        var res = confirm('Are you sure you want to delete conversation?');
        if (res)
        {
            for (var i=0; i<TOTAL_CHAT; i++)
            {
                var con = document.querySelector('.section-1');
                con.removeChild(con.lastElementChild);
            }
            TOTAL_CHAT = 0;
        }
    }
}

function EnterSend(event)
{
    if (event.key === 'Enter' && !event.shiftKey)
    {
        event.preventDefault();
        SendChat(1);
    }
}

function SendChat(numType)
{
    var txtbox = document.getElementById('txt-text');
    if (txtbox.value.trim() !== '')
    {
        CreateMsg(txtbox.value.trim(), numType);
        BotMessage(txtbox.value.trim());
        InputAvailability(false)
    }
    txtbox.focus();
}

function InputAvailability(result)
{
    var txtbox = document.getElementById('txt-text');
    txtbox.disabled = !result;
    txtbox.value = '';
    txtbox.focus();
}

function CreateMsg(message, type)
{
    // create message box
    var msgbox =  document.createElement('div');
    var mbox_class = (type===1 ? 'user-message-box' : 'bot-message-box');
    msgbox.classList.add(mbox_class);
    msgbox.innerText = message;
    
    // create chat box
    var chatbox =  document.createElement('div');
    var cbox_class = (type===1 ? 'user-chat-box' : 'bot-chat-box');
    chatbox.classList.add(cbox_class);

    // append to container
    chatbox.appendChild(msgbox);
    document.querySelector('.section-1').appendChild(chatbox);

    // scroll to bottom
    var lastbox = document.querySelector('.section-1').lastChild;
    if (lastbox) lastbox.scrollIntoView({behavior: 'smooth', block: 'end'});
    
    TOTAL_CHAT++;
}
