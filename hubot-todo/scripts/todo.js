// Description:
//  TODO を管理することができるbotです
// Commands:
//  ボット名 todo       - TODO を作成
//  ボット名 done       - TODO を完了状態にする
//  ボット名 del        - TODO を消す
//  ボット名 list       - TODO の一覧情報を取得する
//  ボット名 donelist   - 完了したTODOの一覧を取得する
'use strict'
const todo = require('todo');
module.exports = (robot) => {
  robot.hear(/todo (.+)/i, (msg) => {
    const task = msg.match[1].trim();
    todo.todo(task);
    msg.send('追加しました：'+ task);
  });
  robot.hear(/done (.+)/i, (msg) => {
    const task = msg.match[1].trim();
    todo.done(task);
    msg.send('完了にしました：'+ task);
  });
  robot.hear(/del (.+)/i, (msg) => {
    const task = msg.match[1].trim();
    todo.del(task);
    msg.send('削除しました：'+ task);
  });
  robot.hear(/list(.+)/i, (msg) => {
    msg.send(todo.list().join('\n'));
  });
  robot.hear(/donelist(.+)/i, (msg) => {
    msg.send(todo.donelist().join('\n'));
  });
};

